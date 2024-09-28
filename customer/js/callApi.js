const PRODUCT_URL = "https://66c740bc732bf1b79fa5e903.mockapi.io/products";
export let listPhoneService = {
  getListPhone: async () => {
    try {
      const res = await axios({
        url: PRODUCT_URL,
        method: "GET",
      });
      return res.data;
    } catch (error) {
      return [];
    }
  },
  getPhoneItem: async (id) => {
    try {
      const res = await axios({
        url: `${PRODUCT_URL}/${id}`,
        method: "GET",
      });
      return res.data;
    } catch (error) {
      return null;
    }
  },
};

const BARE_URL = "https://66f287f871c84d805875a1d7.mockapi.io/carts";
export let listCartService = {
  getListPhone: async () => {
    try {
      const res = await axios({
        url: BARE_URL,
        method: "GET",
      });
      console.log(res);
      return res.data;
    } catch (error) {
      return [];
    }
  },
  createPhoneItem: async (data) => {
    try {
      const res = await axios({
        url: BARE_URL,
        method: "POST",
        data,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  remove: async (id) => {
    try {
      const res = await axios({
        url: `${BARE_URL}/${id}`,
        method: "DELETE",
      });
      return res.data;
    } catch (error) {
      return null;
    }
  },
  update: async (id, quantity) => {
    try {
      let res = await axios({
        url: `${BARE_URL}/${id}`,
        method: "PUT",
        data: { quantity },
      });
      return res.data;
    } catch (error) {
      return null;
    }
  },
};
