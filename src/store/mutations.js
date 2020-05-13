export default {
  //每一个方法尽可能地只处理一件事情

  addToCart(state, payload) {
    payload.check = true
    state.cartList.push(payload);
  },
  addCount(state, payload) {
    payload.count++;
  },
  changCheck(state, payload){
    payload.check =!payload.check
  }
};
