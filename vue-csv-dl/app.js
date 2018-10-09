
var app = new Vue({
  el: '#app',
  data: {
    items: items,
    columns: columns
  },
  methods: {
    downloadCSV () {

      var csv = ''
      var header = []
      Object.keys(this.columns).forEach(function (key) {
        console.log(key)
        console.log(this.columns[key])
        header.push(this.columns[key])
      })

      csv += '\ufeff' + header.join(',') + '\n'
      this.items.forEach(el => {
        var line = []
        Object.keys(this.columns).forEach(function (key) {
          line.push(el[key])
        })
        csv += line.join(',') + '\n'
      })
      let blob = new Blob([csv], { type: 'text/csv' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'Result.csv'
      link.click()
    }
  }
})
