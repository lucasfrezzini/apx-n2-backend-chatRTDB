import { Request, Response } from "express";
import { rtdb } from "../configuracion/rtdb";
import { ref, set, onValue } from "firebase/database";

// Método para mostrar todos los usuarios
const index = async (req: Request, res: Response) => {
  const db = rtdb;
  function writeUserData() {
    set(ref(db, "users/" + 12323234), {
      username: "tano",
      email: "l@l.com",
    });
  }
  const starCountRef = ref(db, "users/" + 1234);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
  res.json({ todo: "ok" });
};

// Store a new message by userId
// const store = async(req: Request, res: Response) {

// }

// Exportamos los métodos
export { index };
