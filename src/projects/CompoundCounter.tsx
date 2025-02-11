// import { createContext, useContext, useState } from "react";
// type CounterContextProps =
//   | {
//       isOpen: boolean;
//       count: number;
//       setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//       setCount: React.Dispatch<React.SetStateAction<number>>;
//     }
//   | undefined;

// const CounterContext = createContext<CounterContextProps>(undefined);

// function Counter({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   const [isOpen, setIsOpen] = useState(true);
//   const [count, setCount] = useState(0);

//   const value = { isOpen, count, setIsOpen, setCount };
//   return (
//     <CounterContext.Provider value={value}>
//       <div
//         className={`max-w-[300px] bg-green-600 p-2 rounded-md relative ${className}`}
//       >
//         {children}
//       </div>
//     </CounterContext.Provider>

// todo : before compound component
//     // <div className="max-w-[300px] bg-green-600 p-2 rounded-md relative">
//     //   <button
//     //     className="absolute right-2 top-1"
//     //     onClick={() => setIsOpen(!isOpen)}
//     //   >
//     //     Close
//     //   </button>

//     //   {isOpen && (
//     //     <div className="text-xl mt-4 flex gap-7 justify-center">
//     //       <button onClick={() => setCount(count - 1)}>-</button>
//     //       <span>{count}</span>
//     //       <button onClick={() => setCount(count + 1)}>+</button>
//     //     </div>
//     //   )}
//     // </div>
//   );
// }

// function useCounterContext() {
//   const context = useContext(CounterContext);

//   if (!context) {
//     throw new Error("Counter context must be used within a Model provider");
//   }
//   return context;
// }

// function Toggle({
//   close,
//   children,
// }: {
//   close: React.ReactNode;
//   children: React.ReactNode;
// }) {
//   const { setIsOpen, isOpen } = useCounterContext();

//   return (
//     <button
//       className="absolute right-2 top-1"
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       {isOpen ? children : close}
//     </button>
//   );
// }

// function Layout({ children }: { children: React.ReactNode }) {
//   const { isOpen } = useCounterContext();
//   if (!isOpen) return null;
//   return (
//     <div className="text-xl mt-4 flex gap-7 justify-center">{children}</div>
//   );
// }

// function Plus({ children }: { children: React.ReactNode }) {
//   const { setCount } = useCounterContext();
//   return (
//     <button onClick={() => setCount((count) => count + 1)}>{children}</button>
//   );
// }
// function Min({ children }: { children: React.ReactNode }) {
//   const { setCount } = useCounterContext();
//   return (
//     <button onClick={() => setCount((count) => count - 1)}>{children}</button>
//   );
// }

// function Count() {
//   const { count } = useCounterContext();
//   return <span>{count}</span>;
// }

// Counter.Toggle = Toggle;
// Counter.Layout = Layout;
// Counter.Plus = Plus;
// Counter.Min = Min;
// Counter.Count = Count;
// export default Counter;

// todo : usage

/* <Counter>
<Counter.Toggle close={"Open"}>Close</Counter.Toggle>
<Counter.Layout>
  <Counter.Count />
  <Counter.Plus>+</Counter.Plus>
  <Counter.Min>-</Counter.Min>
</Counter.Layout>
</Counter> */
