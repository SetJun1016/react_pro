//面试题：从下面的字符串中提炼出所有的图片路径，得到一个数组
let s = `
<div>
    <img class="" src="img/product/detail/586f7483N695168a2.jpg">
</div>
<div>
    <img class="" src="img/product/detail/586f7486Nf809b915.jpg">
</div>
<div>
    <img class="" src="img/product/detail/586f748bN28dbcbb2.jpg">
</div>
`
console.log(  s.match( /img\/\S+\.jpg/g )  )
