import { firebaseDb } from "lib/db/firebase";
import { doc, getDoc } from "firebase/firestore";

export class Post {
  constructor(p_name, p_pic, p_desc, i_name, i_pic, blurb, num_sales) {
    this.product_name = p_name;
    this.product_picture = p_pic;
    this.product_description = p_desc;
    this.influencer_name = i_name;
    this.influencer_picture = i_pic;
    this.blurb = blurb;
    this.num_sales = num_sales;
  }

  static async getPostFromId(id) {
    const docRef = doc(firebaseDb, "products", id); 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return new Post(
        data.product_name,
        data.product_picture,
        data.product_description,
        data.influencer_name,
        data.influencer_picture,
        data.blurb,
        data.num_sales
      );
    }
  }
}
