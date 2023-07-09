import { firebaseDb } from "lib/db/firebase";
import { doc, getDoc } from "firebase/firestore";

export class Sale {
  constructor(name, address, amount_paid, product, product_count, time_ordered, email, time_shipped, tracking_number) {
    this.name = name;
    this.address = address;
    this.amount_paid = amount_paid;
    this.product = product;
    this.product_count = product_count;
    this.time_ordered = time_ordered;
    this.email = email;
    this.time_shipped = time_shipped;
  }

  static async getSaleFromId(id) {
    const docRef = doc(firebaseDb, "sales", id); 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return new Sale(
        data.name,
        data.address,
        data.amount_paid,
        data.product,
        data.product_count,
        data.time_ordered,
        data.email,
        data.time_shipped,
        data.tracking_number
      );
    }
  }
}
