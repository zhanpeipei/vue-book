<template>
  <transition name="translate">
    <div class="book-sort">
      <div class="book-sort-title">
        <i class="icon-fanhui" @click="comeback"></i>
      </div>
      <ul>
        <li class="book-sort-select">
          <span @click="selectGender(0)" :class="{active:gender==0}">全部</span>
          <span @click="selectGender(1)" :class="{active:gender==1}">男频</span>
          <span @click="selectGender(2)" :class="{active:gender==2}">女频</span>
        </li>
        <li class="book-sort-select">
          <span v-for="type in types" @click="selectType(type.id)"
                :class="{active:type.id==classId}">{{type.name}}</span>
        </li>
        <li class="book-sort-select">
          <span @click="selectEnd(0)" :class="{active:end==0}">全部</span>
          <span @click="selectEnd(1)" :class="{active:end==1}">连载</span>
          <span @click="selectEnd(2)" :class="{active:end==2}">完结</span>
        </li>
        <li class="book-sort-select">
          <span @click="selectChargeType(0)" :class="{active:end==0}">全部</span>
          <span @click="selectChargeType(1)" :class="{active:end==1}">免费</span>
          <span @click="selectChargeType(2)" :class="{active:end==2}">收费</span>
        </li>
      </ul>
      <ul class="books">
        <li v-for="book in books" :key="book.id" class="books-item">
          <img v-lazy="book.cover">
          <h3>{{book.book_name}}</h3>
          <h4>作者:{{book.author}}</h4>
          <div class="intro">
            <p>{{book.class_name}}/{{book.end == 1 ? "连载中" : "完结"}}/{{book.size}}字</p>
            <p>最新章节:{{book.newChapName}}</p>
            <p>更新时间:{{book.up_time}}</p>
          </div>
        </li>
      </ul>

    </div>
  </transition>


</template>

<script>
  import {getSort} from "api/bookshop"
  import {getBookList} from "api/booksort"
  import {getBooks2} from "common/js/class"
  import {ERR_OK} from "common/js/config"
  import {mapGetters, mapMutations} from "vuex"

  export default {
    name: 'book-sort',
    created() {
      this._getSort();
      this._getBookList();
    },
    computed: {
      ...mapGetters([
        "classId",
        "gender",
        "end",
        "page"
      ])
    },
    methods: {
      comeback(){
        this.$router.back();
      },
      selectGender(id) {
        this.set_gender(id);
      },
      selectType(id) {
        this.set_classId(id);
      },
      selectEnd(num) {
        this.set_end(num);
      },
      selectChargeType(num) {
        this.set_chargeType(num);
      },
      _getSort() {
        getSort().then(res => {
          if (res.status == ERR_OK) {
            let data = res.data.show.module6.class_data;
            for (let key in data) {
              if (data.hasOwnProperty(key)) {
                let ary = [];
                ary.id = key;
                ary.name = data[key]["name"];
                ary.num = data[key]["num"];
                this.types.push(ary);
                ary = null;
              }
            }
          }
        })
      },
      _getBookList() {
        getBookList(this.page, this.pageSize, this.classId, this.gender, this.end, this.chargeType).then(res => {
          if (res.status == ERR_OK) {
            if (this.page == 1) {
              this.books = [];
            }
            let data = res.data.data;
            data.forEach(item => {
              this.books.push(getBooks2(item))
            })
          }
        })
      },
      ...mapMutations({
        "set_classId": "SET_CLASSID",
        "set_end": "SET_END",
        "set_chargeType": "SET_CHARGETYPE",
        "set_gender": "SET_GENDER",
      })
    },
    data() {
      return {
        types: [{id: "", name: "全部", num: 0}],
        bookList: [],
        pageSize: 18,
        books: []
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "~common/less/variable";
  @import "~common/less/mixin";

  .book-sort {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 5555;
    font-size: @font-size-l;
    background-color: @color-bg-white;
    overflow: auto;
    .book-sort-title{
      height: .8rem;
      background-color: @color-theme;
      .icon-fanhui{
        display: block;
        color:@color-bg-white;
        font-size: @font-size-l;
        line-height: .8rem;
        padding-left: .3rem;

      }
    }
    .book-sort-select {
      position: relative;
      padding: .15rem;
      overflow: hidden;
      &::after {
        content: "";
        bottom: 0;
        right: 0;
        left: 0;
        background: @color-bg-gray;
        position: absolute;
        height: 1px;
        border-bottom: 1px solid @color-font-gray;
        transform: scaleY(.5);
      }
      span {
        float: left;
        font-size: @font-size-m;
        line-height: 1.7;
        padding: 0 .15rem;
        margin-right: .15rem;
        margin-bottom: .15rem;
        border: 1px solid @color-font-gray;
        border-radius: .4rem;
        &.active {
          color: @color-theme;
        }
      }
    }
    .books {
      margin: .2rem .15rem;
      font-size: @font-size-s;
      color: @color-font-gray;
      .books-item {
        overflow: hidden;
        box-sizing: border-box;
        /*padding-left: 30%;*/
        position: relative;
        font-size: @font-size-s;
        margin-bottom: .2rem;
        line-height: 2;
        img {
          float: left;
          width: 40%;
          margin-right: 3%;
        }
        h3 {
          font-size: @font-size-l;
          color:@color-theme-font;
          .nowrap;
        }
        h4 {
          .nowrap;
        }
        .intro{
          position: absolute;
          bottom: 0;
          left: 43%;
          p {
            .nowrap;
          }
        }


      }
    }

  }

  .translate-enter-active, .translate-fade-active {
    transition: all .7s
  }

  .translate-enter, .translate-leave-to {
    transform: translateX(100%);
  }
</style>
