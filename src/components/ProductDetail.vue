<template>
  <div>
    <div class="container main-contant mb-1 mt-4">
      <!-- <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb bg-transparent pl-0">
          <li class="breadcrumb-item"><a href="#">首頁</a></li>
          <li class="breadcrumb-item"><a href="#">金牌專賣店</a></li>
          <li class="breadcrumb-item active" aria-current="page">金牌西裝</li>
        </ol>
      </nav> -->
      <div class="row">
        <div class="col-md-4 mb-5">
          <div class="sticky-top" style="top: 10px;">
            <h1 class="h2">{{ newProduct.title }}</h1>
            <div class="d-flex my-3 align-items-end justify-content-end">
              <del v-if="newProduct.origin_price" class="text-muted"
                >原價 NT${{ newProduct.origin_price }}</del
              >
              <div class="h3 mb-0 ml-auto text-danger">
                <small>售價 NT </small><strong>{{ newProduct.price | currency }}</strong>
              </div>
            </div>
            <hr />
            <div class="input-group mt-3">
              <select class="form-control mr-1" :value="initProductNum" @input="updateProductNum">
                <option value="0" disabled>--請選擇--</option>
                <option :value="num" v-for="num in 10" :key="num"
                  >{{ num }} {{ newProduct.unit }}</option
                >
              </select>
              <a
                href="shoppingCart-checkout.html"
                class="btn btn-danger"
                @click.prevent="addToCart(newProduct.id, initProductNum)"
              >
                <i class="fa fa-cart-plus" aria-hidden="true"></i> 加入購物車
              </a>
            </div>

            <div class="mt-2 text-right text-muted">
              <span class="btn btn-outline-dark btn-sm disabled my-3"
                >{{ newProduct.category }}類</span
              >
            </div>
            <p class="h4">{{ newProduct.description }}</p>
            <p class="card-text">{{ newProduct.content }}</p>
            <div class="d-flex justify-content-start">
              <router-link class="btn btn-primary text-right" to="/">返回</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <!-- <div class="alert alert-secondary" role="alert">
            <h2 class="text-center">購物說明</h2>
            <p>
              購買前可到
              <router-link to="/">優惠頁</router-link>
              領取 Coupon
            </p>
          </div> -->
          <img :src="newProduct.imageUrl" class="w-100" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {
          category: '衣服3',
          content: '這是內容',
          description: 'Sit down please 名設計師設計',
          id: '-L9tH8jxVb2Ka_DYPwng',
          image: 'test.testtest',
          is_enabled: 1,
          num: 0,
          origin_price: 100,
          price: 600,
          title: '[賣]動物園造型衣服3',
          unit: '個',
        };
      },
    },
  },
  data() {
    return {
      newProduct: this.product,
    };
  },
  computed: {
    ...mapGetters('productsModules', ['initProductNum']),
  },
  methods: {
    addToCart(id, qty) {
      this.$store.dispatch('cartsModules/addToCart', { id, qty });
    },
    updateProductNum(e) {
      this.$store.dispatch('productsModules/setProductNum', e.target.value);
    },
  },
  created() {
    // vm.newProduct.num = 0; // 讓下拉選單顯示預設值 -> 請選擇
    this.$store.dispatch('productsModules/setProductNum', 0);
  },
};
</script>
