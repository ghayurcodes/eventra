
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./utils/AuthContext";
import AddEventPage from "./pages/AddEventPage";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
     {
      path: "/add",
      element: <AddEventPage />,
    },
  ]);




  return <AuthProvider>
      <RouterProvider router={router} />;

  </AuthProvider>

}
export default App;



 // useEffect(() => {
  //   const testFirestore = async () => {
  //     try {
  //       // Add a sample document
  //       const docRef = await addDoc(collection(db, "testCollection"), {
  //         name: "Eventra Test",
  //         createdAt: new Date()
  //       });
  //       console.log("Document written with ID: ", docRef.id);

  //       // Fetch all docs from that collection
  //       const querySnapshot = await getDocs(collection(db, "testCollection"));
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} =>`, doc.data());
  //       });

  //       alert("Firestore connection works! Check your console for results.");
  //     } catch (error) {
  //       console.error("Error testing Firestore:", error);
  //       alert("Firestore test failed. Check console.");
  //     }
  //   };

  //   testFirestore();
  // }, []);