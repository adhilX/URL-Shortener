<p align="center">
    <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-regular-tal-revivo.png" align="center" width="30%">
</p>
<p align="center"><h1 align="center">URL-SHORTENER</h1></p>
<p align="center">
	<em><code>❯ A secure, full-stack URL shortening service with JWT authentication</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/adhilX/URL-Shortener?style=default&logo=opensourceinitiative&logoColor=white&color=ffffff" alt="license">
	<img src="https://img.shields.io/github/last-commit/adhilX/URL-Shortener?style=default&logo=git&logoColor=white&color=ffffff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/adhilX/URL-Shortener?style=default&color=ffffff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/adhilX/URL-Shortener?style=default&color=ffffff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

<code>A modern, full-stack URL shortening application with secure user authentication, built using React and Express.js. The application allows authenticated users to convert long URLs into concise, shareable short links with tracking capabilities.</code>

---

##  Features

### 🔐 Authentication & Security
- **Secure User Registration**: Complete signup flow with input validation (name, email, password)
- **User Login/Logout**: Secure authentication with session management
- **Password Security**: Passwords are hashed using bcrypt (10 salt rounds) before storage
- **JWT Token-Based Authentication**: Stateless authentication using JSON Web Tokens
- **Protected Routes**: URL shortening features accessible only to authenticated users
- **Token Verification Middleware**: Automatic token validation on protected endpoints
- **Persistent Sessions**: Redux persist for maintaining user sessions across page reloads

### 🔗 URL Shortening
- **Create Short URLs**: Convert long URLs into short, shareable links using shortid library
- **Duplicate Detection**: Prevents creating multiple short URLs for the same long URL
- **URL Redirection**: Automatic redirect from short URL to original long URL
- **Click Analytics**: Track usage history with timestamps for each URL access
- **URL History**: MongoDB-based storage for tracking all shortened URLs

### 🎨 Frontend & UI/UX
- **Modern React Application**: Built with React 19, TypeScript, and Vite
- **Beautiful UI Design**: Dark-themed interface with animated components using Framer Motion
- **Responsive Design**: Fully responsive layout using TailwindCSS 4.1
- **Form Validation**: Client-side validation using Formik and Yup
- **State Management**: Redux Toolkit with Redux Persist for global state
- **Real-time Feedback**: Toast notifications for user actions (react-hot-toast)
- **Smooth Animations**: Animated backgrounds, hover effects, and transitions
- **Copy to Clipboard**: One-click copy functionality for shortened URLs

### 🛠️ Backend Architecture
- **Express.js Backend**: RESTful API with TypeScript support
- **MongoDB Database**: Mongoose ODM for data modeling and validation
- **CORS Configuration**: Secure cross-origin resource sharing
- **Environment Variables**: Secure configuration using dotenv
- **Error Handling**: Comprehensive error handling with custom status codes
- **Input Validation**: Server-side validation for all endpoints
- **Password Comparison**: Secure password verification using bcrypt

### 📊 Data Validation & Error Handling
- **Email Validation**: Valid email format checking on both frontend and backend
- **Password Requirements**: Minimum 6 characters enforcement
- **Duplicate User Prevention**: Check for existing users before registration
- **Error Messages**: Clear, user-friendly error messages
- **Edge Case Handling**: Comprehensive handling of edge cases and invalid inputs
- **404 Handling**: Proper handling of non-existent short URLs

### 🚀 AI-Assisted Development
- **Design Enhancement**: Claude.ai was utilized for designing the modern UI/UX components, including the dark-themed interface with animated backgrounds and smooth transitions
- **Planning & Architecture**: ChatGPT assisted in planning the project structure, API design, and implementation strategy, significantly improving development speed and code organization

---

##  Project Structure

```sh
└── URL-Shortener/
    ├── README.md
    ├── backend
    │   ├── .gitignore
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src
    │   └── tsconfig.json
    └── frontend
        ├── .gitignore
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── public
        ├── src
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        ├── vercel.json
        └── vite.config.ts
```


###  Project Index
<details open>
	<summary><b><code>URL-SHORTENER/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- backend Submodule -->
		<summary><b>backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/app.ts'>app.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>model</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/model/userSchema.ts'>userSchema.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/model/urlSchema.ts'>urlSchema.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>config</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/config/statusCode.ts'>statusCode.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/config/db.ts'>db.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/routes/urlRoute.ts'>urlRoute.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/routes/authRoute.ts'>authRoute.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/utils/jwt.ts'>jwt.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/utils/shortURL.ts'>shortURL.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/utils/passwordHash.ts'>passwordHash.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>middleware</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/middleware/authMiddleware.ts'>authMiddleware.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>controller</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/controller/urlController.ts'>urlController.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/backend/src/controller/authController.ts'>authController.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- frontend Submodule -->
		<summary><b>frontend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/vercel.json'>vercel.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/vite.config.ts'>vite.config.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/index.html'>index.html</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/eslint.config.js'>eslint.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/main.tsx'>main.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/index.css'>index.css</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/App.tsx'>App.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>types</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/types/IUser.ts'>IUser.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/components/LogoutButton.tsx'>LogoutButton.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/components/Result.tsx'>Result.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/components/InfoSection.tsx'>InfoSection.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/components/ShortnerButton.tsx'>ShortnerButton.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/pages/URLShortener.tsx'>URLShortener.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/pages/Signup.tsx'>Signup.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/pages/Login.tsx'>Login.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>store</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/store/store.ts'>store.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>slice</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/store/slice/userSlice.ts'>userSlice.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/routes/ProctectedRoute.tsx'>ProctectedRoute.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>validations</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/validations/loginValidation.ts'>loginValidation.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/validations/signupValidation.ts'>signupValidation.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>service</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/service/urlService.ts'>urlService.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/service/authService.ts'>authService.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>axios</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/adhilX/URL-Shortener/blob/master/frontend/src/axios/axiosInstance.ts'>axiosInstance.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with URL-Shortener, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install URL-Shortener using one of the following methods:

**Build from source:**

1. Clone the URL-Shortener repository:
```sh
❯ git clone https://github.com/adhilX/URL-Shortener
```

2. Navigate to the project directory:
```sh
❯ cd URL-Shortener
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run URL-Shortener using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/adhilX/URL-Shortener/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/adhilX/URL-Shortener/issues)**: Submit bugs found or log feature requests for the `URL-Shortener` project.
- **💡 [Submit Pull Requests](https://github.com/adhilX/URL-Shortener/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/adhilX/URL-Shortener
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/adhilX/URL-Shortener/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=adhilX/URL-Shortener">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---