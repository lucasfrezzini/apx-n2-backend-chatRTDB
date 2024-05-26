import { Request, Response } from "express";
import { rtdb } from "../configuracion/rtdb";
import { ref, set, onValue } from "firebase/database";

// Método para mostrar todos los usuarios
const index = async (req: Request, res: Response) => {
  // let listaUsuarios: admin.firestore.DocumentData[] = [];
  // try {
  //   // Obtenemos la lista de usuarios
  //   const snapshot = await Users.get(); // snapshot es un QuerySnapshot
  //   snapshot.forEach((doc) => {
  //     // Iteramos sobre cada documento en el snapshot
  //     listaUsuarios.push(doc.data()); // Añadimos el contenido del documento al array
  //   });
  //   res.json(listaUsuarios);
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({ msg: "Error al obtener los usuarios" });
  // }
  // Obtener una referencia a la ubicación donde deseas escribir los datos
  // Obtener una referencia a la base de datos

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
    res.json(data);
  });
};

// Exportamos los métodos
export { index };
