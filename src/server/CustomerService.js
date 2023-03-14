import firestore from "../firestore";
import { collection, addDoc } from "firebase/firestore";

const customerTable = "customer";

let customer = {
  customerName: "",
  customerCode: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  phone: "",
  fax: "",
  email: "",
  website: "",
  orgType: "",
  contactPerson: "",
  eventScope: "",
  eventDate: "",
};

class CustomerService {
  async addCustomer(customer) {
    try {
      const custRef = await addDoc(collection(firestore, customerTable), {
        customer,
      });
      console.log("Customer writtern with RefId: ", custRef.id);
    } catch (e) {
      console.error("Error adding customer:", e);
    }
  }
}

export default new CustomerService();
