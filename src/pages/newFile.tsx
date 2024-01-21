import Header from '../components/Header.astro';
import BaseLayout from '../layouts/BaseLayout.astro';

<Fragment>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="viewport" content="width=device-width" />
<meta name="generator" content={Astro.generator} />
<title>Hogwarts News</title>
</head>
<body class="">
<Header />
<BaseLayout>
<slot />
</BaseLayout>
</body>
</html>
</Fragment>;
