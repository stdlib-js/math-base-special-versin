<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Versine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [versed sine][versed-sine].

<section class="intro">

The [versed sine][versed-sine] is defined as

<!-- <equation class="equation" label="eq:versine" align="center" raw="\operatorname{versin}(\theta) = 1 - \cos \theta" alt="Versed sine."> -->

```math
\operatorname{versin}(\theta) = 1 - \cos \theta
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{versin}(\theta) = 1 - \cos \theta" data-equation="eq:versine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/versin/docs/img/equation_versine.svg" alt="Versed sine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import versin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-versin@esm/index.mjs';
```

#### versin( x )

Computes the [versed sine][versed-sine] of a `number` (in radians).

```javascript
var v = versin( 0.0 );
// returns 0.0

v = versin( 3.141592653589793/2.0 );
// returns ~1.0

v = versin( -3.141592653589793/6.0 );
// returns ~0.13397
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import TWO_PI from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@esm/index.mjs';
import versin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-versin@esm/index.mjs';

var x = linspace( 0.0, TWO_PI, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( versin( x[ i ] ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/vercos`][@stdlib/math/base/special/vercos]</span><span class="delimiter">: </span><span class="description">compute the versed cosine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-versin.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-versin

[test-image]: https://github.com/stdlib-js/math-base-special-versin/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-versin/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-versin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-versin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-versin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-versin/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-versin/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-versin/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-versin/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-versin/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-versin/main/LICENSE

[versed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos/tree/esm

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math-base-special-sin/tree/esm

[@stdlib/math/base/special/vercos]: https://github.com/stdlib-js/math-base-special-vercos/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
