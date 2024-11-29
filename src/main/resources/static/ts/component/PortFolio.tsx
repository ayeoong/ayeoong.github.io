import React, {Fragment, useEffect, useRef} from "react";
import Typed from "typed.js";

const PortFolio = () => {
	const typedStr = useRef(null);

	useEffect(() => {
		const options = {
			strings: [`Hello, I'm Ayeong!`, `Welcome to my Portfolio!`],
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 3000,
			loop: true,
		}

		const typed = new Typed(typedStr.current, options);

		return ():void => {
			typed.destroy();
		};
	}, []);
	//
	// const sendMail = useCallback(():void => {
	// 	const recipient = "wmk1024@gmail.com"; // 수신자 이메일
	// 	const subject = "Hello"; // 제목
	// 	const body = `Hi there,\n\nThis is a test email sent from your website.\n\nBest regards,\nAyeong`; // 본문
	// 	const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
	// 		recipient
	// 	)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	// 	window.open(gmailLink, "_blank");
	// }, []);

	return (
		<Fragment>
			<div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, fontSize: `52px`, marginTop: `48px` }}>
				<span ref={typedStr} />
			</div>

			<div style={{ display:`flex`, flexFlow:`column`, gap:`4px`, textAlign: `left` }}>
				<h2 style={{ borderBottom: `1px solid #d8dee4`, color: `#282d33` }}>🛠️ Tech Stacks</h2>
				<div style={{ display:`flex`, flexFlow:`column`, gap:`4px`, alignItems:`center` }}>
					<div style={{ display:`flex`, flexFlow:`row`, alignItems: `center`, gap:`2px`}}>
						<img src={`https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white`} alt={`Django`} />
						<img src={`https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white`} alt={`Discord`} />
						<img src={`https://img.shields.io/badge/GitHub Pages-222222?style=for-the-badge&logo=GitHub Pages&logoColor=white`} alt={`GitHub Pages`} />
						<img src={`https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white`} alt={`Git`} />
						<img src={`https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white`} alt={`Github`} />
					</div>
					<div style={{ display:`flex`, flexFlow:`row`, alignItems: `center`, gap:`2px`}}>
						<img src={`https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white`} alt={`HTML5`} />
						<img src={`https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white`} alt={`Java`} />
						<img src={`https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white`} alt={`Javascript`} />
						<img src={`https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white`} alt={`MySQL`} />
						<img src={`https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white`} alt={`Notion`} />
					</div>
					<div style={{ display:`flex`, flexFlow:`row`, alignItems: `center`, gap:`2px`}}>
						<img src={`https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white`} alt={`Python`} />
						<img src={`https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white`} alt={`React`} />
						<img src={`https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white`} alt={`React Query`} />
						<img src={`https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white`} alt={`Redux`} />
						<img src={`https://img.shields.io/badge/ReduxSaga-999999?style=for-the-badge&logo=ReduxSaga&logoColor=white`} alt={`Redux Saga`} />
						{/* <br /> */}
					</div>
					<div style={{ display:`flex`, flexFlow:`row`, alignItems: `center`, gap:`2px`}}>
						<img src={`https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white`} alt={`Slack`} />
						<img src={`https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white`} alt={`Selenium` }/>
						<img src={`https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white`} alt={`Spring`} />
						<img src={`https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white`} alt={`Spring Boot`} />
						<img src={`https://img.shields.io/badge/Tensorflow-FF6F00?style=for-the-badge&logo=Tensorflow&logoColor=white`} alt={`Tensorflow`} />
						<br />
						<img src={`https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=Trello&logoColor=white`} alt={`Trello`} />
						<img src={`https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white`} alt={`Figma`} />
						<img src={`https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white`} alt={`CSS3`} />
					</div>
				</div>
			</div>

			<div style={{ textAlign: `left` }}>
				<h2 style={{ borderBottom: `1px solid #d8dee4`, color: `#282d33` }}>🧑‍💻 Contact me</h2>
				<br />
				<div style={{ display:`flex`, flexFlow:`column`, gap:`4px`, alignItems:`center` }}>
					<div style={{display: `flex`, flexFlow: `row`, alignItems: `center`, gap: `2px`}}>
						<span><img
							src={`https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white`}
							alt={`Velog`}/></span>
						<span><img
							src={`https://img.shields.io/badge/Naver-03C75A?style=for-the-badge&logo=Naver&logoColor=white`}
							alt={`Naver`}/></span>
						<span><img
							src={`https://img.shields.io/badge/Tistory-000000?style=for-the-badge&logo=Tistory&logoColor=white`}
							alt={`Tistory`}/></span>
						<span><img
							src={`https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white`}
							alt={`Notion`}/></span>
						<span
							onClick={() => {
								const recipient = "wmk1024@gmail.com"; // 수신자 이메일
								const subject = "Hello"; // 제목
								const body = `Hi there,\n\nThis is a test email sent from your website.\n\nBest regards,\n`; // 본문
								const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
									recipient
								)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
								window.open(gmailLink, "_blank");
							}}
							style={{cursor: "pointer"}}
						>
						<img
							src={`https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=Gmail&logoColor=white`}
							alt={`Gmail`}
						/>
  						</span>
					</div>
					<br/>
				</div>
			</div>

			<div style={{textAlign: `left`}}>
				<h2 style={{borderBottom: `1px solid #d8dee4`, color: `#282d33`}}>🏅 Stats</h2>
				<div style={{display: `flex`, flexFlow: `column`, gap: `4px`, alignItems: `center`}}>
					<div style={{alignItems: `center`}}>
						<img
							src={`https://github-readme-stats.vercel.app/api?username=ayeoong&title_color=000000&text_color=000000`}
							alt={`GitHub stats`}/>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default React.memo(PortFolio);