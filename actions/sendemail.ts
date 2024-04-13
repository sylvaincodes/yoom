import axios from "axios";
import toast from "react-hot-toast";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/send`;

const sendEmail = async (values: any): Promise<any> => {

	try {
		    if (!values.email || !values.name) {
		      toast('Renseignez tous les champs')
		      return;
		    }
	  
		    const res = await axios.post(`${URL}`, {
		      email: `${values.email}`,
		      name: `${values.name}`,
		    });
		    console.log(res.data);
			
		    toast('Invitation envoyé!')
		  } catch (error: any) {
		    console.log(error);
		    toast('Invitation échouée!');
		  }

};

export default sendEmail;
