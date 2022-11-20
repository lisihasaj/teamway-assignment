import Routes from "@routes/routes";
import { db } from "@lib/api/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const usersCollection = collection(db, "users");
async function users() {
    const response = await getDocs(usersCollection);
    return response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
}

export default function App() {
    users().then((data) => {
        console.log(data);
    });

    return <Routes />;
}
