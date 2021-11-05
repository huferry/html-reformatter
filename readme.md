# HTML Reformattor

## Create Unordered List
```javascript
const reformatter = require('html-reformatter')

const input = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
-
-<p>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.</p>
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
-<p>Maecenas et lacus sit amet massa tincidunt scelerisque id sit amet purus.</p>
<p>Praesent mi ante, commodo in efficitur sed, sagittis in magna.</p>
-<p>Praesent eget diam auctor, rutrum lacus eget, imperdiet eros. </p>
-
<p>Nulla tempor, enim ut dapibus lobortis, ligula diam tempus tortor, eu interdum purus ligula vitae ligula. Fusce ex lectus, tincidunt quis libero eget, sagittis iaculis ipsum.</p>
<p>Suspendisse finibus sagittis arcu in lobortis.</p>
<p>Sed imperdiet erat nec augue consectetur, ut laoreet neque tristique. Sed elit elit, finibus tempus diam nec, feugiat vehicula metus.<p>
`

const actual = reformatter(input)
console.log(actual)

/*
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>

<ul>
<li>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
</li>
<li>Maecenas et lacus sit amet massa tincidunt scelerisque id sit amet purus.
<p>Praesent mi ante, commodo in efficitur sed, sagittis in magna.</p>
</li>
<li>Praesent eget diam auctor, rutrum lacus eget, imperdiet eros. </li>
</ul>

<p>Nulla tempor, enim ut dapibus lobortis, ligula diam tempus tortor, eu interdum purus ligula vitae ligula. Fusce ex lectus, tincidunt quis libero eget, sagittis iaculis ipsum.</p>
<p>Suspendisse finibus sagittis arcu in lobortis.</p>
<p>Sed imperdiet erat nec augue consectetur, ut laoreet neque tristique. Sed elit elit, finibus tempus diam nec, feugiat vehicula metus.<p>
*/

```

## Create Ordered List
```javascript
const reformatter = require('html-reformatter')

const input = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
--
-<p>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.</p>
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
-<p>Maecenas et lacus sit amet massa tincidunt scelerisque id sit amet purus.</p>
<p>Praesent mi ante, commodo in efficitur sed, sagittis in magna.</p>
-<p>Praesent eget diam auctor, rutrum lacus eget, imperdiet eros. </p>
--
<p>Nulla tempor, enim ut dapibus lobortis, ligula diam tempus tortor, eu interdum purus ligula vitae ligula. Fusce ex lectus, tincidunt quis libero eget, sagittis iaculis ipsum.</p>
<p>Suspendisse finibus sagittis arcu in lobortis.</p>
<p>Sed imperdiet erat nec augue consectetur, ut laoreet neque tristique. Sed elit elit, finibus tempus diam nec, feugiat vehicula metus.<p>
`

const actual = reformatter(input)
console.log(actual)

/*
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>

<ol>
<li>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
</li>
<li>Maecenas et lacus sit amet massa tincidunt scelerisque id sit amet purus.
<p>Praesent mi ante, commodo in efficitur sed, sagittis in magna.</p>
</li>
<li>Praesent eget diam auctor, rutrum lacus eget, imperdiet eros. </li>
</ol>

<p>Nulla tempor, enim ut dapibus lobortis, ligula diam tempus tortor, eu interdum purus ligula vitae ligula. Fusce ex lectus, tincidunt quis libero eget, sagittis iaculis ipsum.</p>
<p>Suspendisse finibus sagittis arcu in lobortis.</p>
<p>Sed imperdiet erat nec augue consectetur, ut laoreet neque tristique. Sed elit elit, finibus tempus diam nec, feugiat vehicula metus.<p>
*/

```

## Convert `<p>` to Header with Numbering 

```javascript
const reformatter = require('html-reformatter')

const input = `
h1<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
h2.A<p>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.</p>
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
h3.1<p>Maecenas et lacus sit amet massa tincidunt scelerisque id sit amet purus.</p>
h3.2<p>Praesent mi ante, commodo in efficitur sed, sagittis in magna.</p>
<p>Praesent eget diam auctor, rutrum lacus eget, imperdiet eros. </p>
h2.B<p>Nulla tempor, enim ut dapibus lobortis, ligula diam tempus tortor, eu interdum purus ligula vitae ligula. Fusce ex lectus, tincidunt quis libero eget, sagittis iaculis ipsum.</p>
<p>Suspendisse finibus sagittis arcu in lobortis.</p>
<p>Sed imperdiet erat nec augue consectetur, ut laoreet neque tristique. Sed elit elit, finibus tempus diam nec, feugiat vehicula metus.<p>
`

const actual = reformatter(input)
console.log(actual)

/*
<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </h1>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
<h2>A. Mauris quis purus dictum, dignissim magna ac, aliquam turpis.</h2>
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
<h3>1. Maecenas et lacus sit amet massa tincidunt scelerisque id sit amet purus.</h3>
<h3>2. Praesent mi ante, commodo in efficitur sed, sagittis in magna.</h3>
<p>Praesent eget diam auctor, rutrum lacus eget, imperdiet eros. </p>
<h2>B. Nulla tempor, enim ut dapibus lobortis, ligula diam tempus tortor, eu interdum purus ligula vitae ligula. Fusce ex lectus, tincidunt quis libero eget, sagittis iaculis ipsum.</h2>
<p>Suspendisse finibus sagittis arcu in lobortis.</p>
<p>Sed imperdiet erat nec augue consectetur, ut laoreet neque tristique. Sed elit elit, finibus tempus diam nec, feugiat vehicula metus.<p>
*/

```

