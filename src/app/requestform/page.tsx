'use client';
import  H1tag  from "../components/H1tag";
import Ptag from "../components/Ptag";
import { useForm, ValidationError } from '@formspree/react';
import Afterrequest from "../components/Afterrequest";
//name,email,message

export default function Requestform() {
    const [state, handleSubmit] = useForm("xwpordwa");
  if (state.succeeded) {
      return <Afterrequest/>;
  }

  return (
      <div>  
      <section className="flex flex-col items-center mt-8 pb-16 mb-8">        
        <H1tag><i className="ri-mail-line  brownColor"></i>ご質問・お問い合わせ</H1tag>
        <form onSubmit={handleSubmit} className="max-w-md w-[80vw] mx-auto space-y-4">
          <label htmlFor="name">
            名前(ニックネームでも可)
          </label>
          <input id="name" type='name' name='name' className="border p-2 w-full"/>
          <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          />
          <label htmlFor="email">
            メールアドレス
          </label>
          <input
        id="email"
        type="email" 
        name="email"
         className="border p-2 w-full"/>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
            お問い合わせ内容。ご不明な点、聞きたいこと
      </label>
      <textarea
        id="message"
        name="message"
      className="border p-2 w-full h-32"/>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}  className="bg-blue-500 text-white px-4 py-2 rounded mx-auto">
        ご確認の上、送信
      </button>
        </form>
      </section>
    </div>
  );
}
