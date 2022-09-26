import { createSlice } from "@reduxjs/toolkit";

export const thaaliAppSlice = createSlice({
  name: "thaaliItems",
  initialState: {
    // customerName: prompt("Your Name?"),
    menuItems: [
      {
        id: 1,
        itemName: "Chapati",
        image:
          "https://spicecravings.com/wp-content/uploads/2020/12/Roti-Featured-1-500x375.jpg",
        description:
          "gazab ka aashirvaad aate ka bana roti hai..brand ka aashirvaad mileg aur saath mein 5kg aata complimentary ghar ke liye.",
        price: 10,
        itemQty: 1,
      },
      {
        id: 2,
        itemName: "Pickle",
        image:
          "https://i.ndtvimg.com/i/2017-02/pickle-620x350_620x350_51487758433.jpg",
        price: 5,
        description:
          "Chaddar ki kamiz..lohe ka pazama..bandar tera mama..billi teri mausi..kutta tera yaar..aam ka achar wala achar",
        itemQty: 1,
      },
      {
        id: 3,
        itemName: "Curd",
        image:
          "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/07/09/Pictures/_90b9dbd2-45c0-11e6-b0f4-7520104944f6.tif",
        price: 25,
        description: "gazab ka dahi hai boss !!! bole to ekdum creamy..",
        itemQty: 1,
      },
      {
        id: 4,
        itemname: "Sweet",
        image:
          "https://img.freepik.com/premium-photo/indian-sweet-motichoor_55610-938.jpg",
        price: 30,
        description:
          "ek num sweet... bole to sugar free.... diabetic patient bhi daba ke khaye !!",
        itemQty: 1,
      },
      {
        id: 5,
        itemName: "Daal",
        image:
          "https://c.ndtvimg.com/2020-04/vpuvu4ng_dal-tadka_625x300_30_April_20.jpg",
        price: 40,
        description: "Mast tadka maar ke daal.... ",
        itemQty: 1,
      },
      {
        id: 6,
        itemName: "Paneer Dish",
        image: "https://static.toiimg.com/photo/53251884.cms",
        price: 140,
        description:
          "arree guru khao... maza aa jayega... menu mein bestam best hai!!",
        itemQty: 1,
      },
    ],
    selectedItems: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.selectedItems.push(actions.payload);
    },
    removeItem: () => {},
    addQty: (state, actions) => {
      const selectedDishId = actions.payload;
      console.log(selectedDishId, "selected dish in slice add");

      state.selectedItems.filter(
        (item) => item.id === selectedDishId
      )[0].itemQty += 1;

      state.menuItems.filter(
        (item) => item.id === selectedDishId
      )[0].itemQty += 1;
    },
    decreaseQty: (state, actions) => {
      const selectedDishId = actions.payload;
      console.log(selectedDishId, "selected dish in slice decrease");

      if (
        state.menuItems.filter((item) => item.id === selectedDishId)[0]
          .itemQty <= 1
      ) {
        // DO NOTHING (COMMENTED BELOW, Cuz when creating build file, its giving error)
        // state.menuItems.filter((item) => item.id === selectedDishId)[0]
        //   .itemQty === 1;
      } else {
        state.selectedItems.filter(
          (item) => item.id === selectedDishId
        )[0].itemQty -= 1;

        state.menuItems.filter(
          (item) => item.id === selectedDishId
        )[0].itemQty -= 1;
      }
    },
    removeFromCart: (state, actions) => {
      const selectedDishId = actions.payload;

      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== selectedDishId
      );
    },
  },
});

export const { addItem, removeItem, addQty, decreaseQty, removeFromCart } =
  thaaliAppSlice.actions;

export default thaaliAppSlice.reducer;
