// import { useState } from "react";

// function App() {
//   return (
//     <div className="m-[50px]">
//       <h1 className="my-6 text-3xl">Password Strength Checker</h1>
//       <PasswordChecker />
//     </div>
//   );
// }

// function PasswordChecker() {
//   const [password, setPassword] = useState("");

//   return (
//     <form className="space-y-2">
//       <PasswordInput password={password} setPassword={setPassword} />
//       <ProgressPassword password={password} />
//       <SarongsPassword password={password} />

//       <PasswordHints password={password} />
//     </form>
//   );
// }

// function PasswordInput({
//   password,
//   setPassword,
// }: {
//   password: string;
//   setPassword: React.Dispatch<React.SetStateAction<string>>;
// }) {
//   return (
//     <input
//       type="password"
//       className="px-2 py-3 rounded-lg bg-[#2A2A2A] outline-none w-full max-w-[400px] "
//       onChange={(e) => setPassword(e.target.value)}
//       value={password}
//       placeholder="enter your password"
//     />
//   );
// }
// function PasswordHints({ password }: { password: string }) {
//   const hintsArray = [
//     {
//       label: "Password Should Contains 8 characters",
//       match: isLongEnough(password),
//     },
//     { label: "Password Contains Numbers", match: hasNumbers(password) },
//     {
//       label: "Password Contains special Characters",
//       match: hasSpecialChar(password),
//     },
//     {
//       label: "Password Contains Uppercase and Lowercase",
//       match: hasLowerCaseAndUpperCase(password),
//     },
//   ];

//   return (
//     <ul className="my-3">
//       {hintsArray.map((hint) => (
//         <li
//           key={hint.label}
//           className={` ${hint.match ? "text-green-600" : "text-[#a7a8a9]"}`}
//         >
//           {hint.match ? "✓" : "○"} {hint.label}
//         </li>
//       ))}
//     </ul>
//   );
// }
// function SarongsPassword({ password }: { password: string }) {
//   return (
//     <label className="block text-white">
//       {checkStrength(password)} Password
//     </label>
//   );
// }

// function ProgressPassword({ password }: { password: string }) {
//   const colors = {
//     Strong: "after:bg-green-600 after:w-full",
//     Medium: "after:bg-yellow-600 after:w-[75%]",
//     Weak: "after:bg-red-600 after:w-[25%]",
//   };
//   return (
//     <div
//       className={`py-1 w-full max-w-[400px] ${
//         colors[checkStrength(password)]
//       } bg-white rounded-xl relative after:duration-300 after:absolute after:left-0 after:h-full after:rounded-[inherit] after:top-0`}
//     ></div>
//   );
// }

// function hasLowerCaseAndUpperCase(password: string) {
//   return /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password);
// }

// function hasSpecialChar(password: string) {
//   return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
// }

// function isLongEnough(password: string) {
//   return password.length >= 8;
// }

// function hasNumbers(password: string) {
//   return /\d/.test(password);
// }

// function checkStrength(password: string) {
//   const hasLowerCase = /[a-z]/.test(password);
//   const hasUpperCase = /[A-Z]/.test(password);
//   const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
//   const isLongEnough = password.length >= 8;

//   if (isLongEnough && hasLowerCase && hasUpperCase && hasSpecialChar) {
//     return "Strong";
//   }

//   if (isLongEnough && hasLowerCase && hasUpperCase) {
//     return "Medium";
//   }

//   return "Weak";
// }

// export default App;
