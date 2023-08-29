import passport from "passport";
import { Strategy as  BearerStrategy} from "passport-http-bearer";
import { validarToken } from "../middleware/jwt.js";

passport.use(new BearerStrategy(
  async function(token, done) {
    const usuario =  await validarToken(token)
    if (!usuario) return done(null, false); // No se encontró el token en la colección token o el token no es válido
    return done(null, usuario); // El token es válido y se agrega el documento de la colección token a req.user
  }
));
export default passport;