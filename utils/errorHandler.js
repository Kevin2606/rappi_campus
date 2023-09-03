import { MongoError } from "mongodb";

export default (err, req, res, next) => {
    //console.error(err.errInfo.details.schemaRulesNotSatisfied);    
    let errMsg = []    
    console.log(err)
    if (err instanceof MongoError)
    {   
        if(err.code === 11000 )
        { 
            const keyField = Object.keys(err.keyPattern);
            const keyValue = err.keyValue[keyField];
            const message=`ERROR: violación de clave única o índice único. Ya existe el KeyPattern ('${keyField}') con este KeyValue('${keyValue}')`
            errMsg.push(message)            
        }

        if (err.code === 121)
            {
            for(let i=0; i<err.errInfo.details.schemaRulesNotSatisfied.length; i++)
            {
                if (err.errInfo && err.errInfo.details && err.errInfo.details.schemaRulesNotSatisfied && err.errInfo.details.schemaRulesNotSatisfied[i].operatorName == "required")  
                {           
                    const missingProperties = err.errInfo.details.schemaRulesNotSatisfied[i].missingProperties;
                    const message = `Faltan propiedades requeridas: ${missingProperties.join(", ")}`;
                    errMsg.push(message);                
                }

                if (err.code === 121 && err.errInfo && err.errInfo.details && err.errInfo.details.schemaRulesNotSatisfied && err.errInfo.details.schemaRulesNotSatisfied[i].operatorName == "properties")
                {
                    for(let k=0; k<err.errInfo.details.schemaRulesNotSatisfied[i].propertiesNotSatisfied.length; k++)
                    {  
                        const propertyName=err.errInfo.details.schemaRulesNotSatisfied[i].propertiesNotSatisfied[k].propertyName
                        const reason=err.errInfo.details.schemaRulesNotSatisfied[i].propertiesNotSatisfied[k].details[0].reason
                        const type=err.errInfo.details.schemaRulesNotSatisfied[i].propertiesNotSatisfied[k].details[0].specifiedAs.bsonType
                        const considererValue=err.errInfo.details.schemaRulesNotSatisfied[i].propertiesNotSatisfied[k].details[0].consideredValue
                        const consideredType=err.errInfo.details.schemaRulesNotSatisfied[i].propertiesNotSatisfied[k].details[0].consideredType                    
                        
                        const message=`Error: ${reason}. El campo '${propertyName}', debe ser de tipo '${type}', el valor ingresado '${considererValue}' es considerado de tipo '${consideredType}'. `                    
                        errMsg.push(message);
                        
                    } 
                }
            }   
        }
        res.status(400).json({ status: 400, errMsg });         
    } 
    res.status(400).json({ status: 400, errMsg:"Error interno del servidor" });   
        
}
