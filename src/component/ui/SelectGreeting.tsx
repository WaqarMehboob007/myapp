// "use client";
// import * as React from "react"
// import {useState, useContext} from 'react'

// const greetingArray:string[] = [`BirthDay`,`Aniversary`,`Best Wishes`,`Happy Father's Day`,`Happy Mother's Day`];

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { greetingContext } from "@/app/page";

// export default function SelectGreeting() {
//   const newGreeting = useContext(greetingContext)
//   return (

//       <Select>
//        <SelectTrigger className="w-[180px]">
//          <SelectValue placeholder="Select a Greeting" />
//        </SelectTrigger>
//        <SelectContent>
//          <SelectGroup>
//            <SelectLabel>Greetings</SelectLabel>
//            {
//             greetingArray.map((item, index)=> 
//             <SelectItem 
//                 key={index}
//                 value={item}
//                 onChange={()=>setgreeting(item)}
//             >
//                 {item}
//             </SelectItem>)
//            }
//          </SelectGroup>
//        </SelectContent>
//      </Select>
     
//    )
//  }