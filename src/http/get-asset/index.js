const arc = require('@architect/functions')
exports.handler = arc.http.async(asset)
async function asset (req) {
  let query = req.query
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'image/svg+xml; charset=utf8'
    },
    body: `
    <svg fill="none" viewBox="0 0 800 400" width="800" height="400" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
				.container {
					font-family:
						system-ui,
						-apple-system,
						'Segoe UI',
						Roboto,
						Helvetica,
						Arial,
						sans-serif,
						'Apple Color Emoji',
						'Segoe UI Emoji';
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin: 0;
					width: 100%;
					height: 400px;
					text-align: center;
				}
				h1 {
				  font-size: 100px;
					background: -webkit-linear-gradient(180deg, #ffc203,#fd6e6c);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				p {
					font-size: 20px;
					text-shadow: 0 1px 0 #efefef;
					animation: 5s ease 0s normal forwards 1 fadeIn;
				}
			</style>
			<div class="container">
				<h1>${query.name}</h1>
			</div>
		</div>
	</foreignObject>
</svg>
`
  }
}
