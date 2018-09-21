// データ定義
var data = {
  members: [
    { name:'山田', age:'30歳' },
    { name:'田中', age:'29歳' },
    { name:'鈴木', age:'25歳' }
  ],
  posts: [
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
  ]
};

Vue.component('blog-post', {
  props: ['title'],
  template: '<p>{{ title }}</p>'
})

Vue.component('compo-member', {
  props: {'member':Object},
  computed: {
    age: function(){
      var age = this.member.age.replace(/(\d+)/g, "<span style='color:red'>$1</span>");
      return age;
    }
  },
  template: '#template-member'
})

var ComponentA = {
  props: {'member':Object},
  computed: {
    age: function(){
      var age = this.member.age.replace(/(\d+)/g, "<span style='color:red'>$1</span>");
      return age;
    }
  },
  template: '#template-member'
}

// Vue.js インスタンス
var app = new Vue({
  el: '#app',
  data: data,
  components: {
    'menber-tag': ComponentA
  }
});

