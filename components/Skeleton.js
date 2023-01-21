export default function Skeleton() {
	return (
		<div className="skeleton mt-20 mx-auto">
			<div className='s-banner'></div>
			<div className='s-header'></div>
			<div className='s-content'></div>
			<div className='s-content'></div>
			<div className='s-content'></div>

			<style jsx>{`
				.skeleton {
					max-width: 1200px;
				}

				.skeleton > div {
					background: #605B56;
					border-radius: 4px;
					margin: 20px 0;
				}

				.s-banner {
					padding: 12% 0;
				}

				.s-header {
					padding: 15px 0;
					max-width: 500px;
				}

				.s-content {
					padding: 8px 0;
					max-width: 1000px;
				}
			`}</style>
		</div>
	)
}