import SkilllComponent from '@/components/skillComponent'
import BaseLayout from '@/layouts/BaseLayout'
import React from 'react'


export const metadata = {
    title : 'Skills'
  }

const Skill = () => {

    const skills = [
        {
            title: 'HTML',
            desc: 'HTML (Hypertext Markup Language) is the standard markup language used to create and structure content on the World Wide Web. It is a fundamental technology for building web pages and is used to define the structure and layout of web documents, including text, images, links, forms, and multimedia elements. HTML provides a set of elements and tags that are used to mark up or structure the content, making it understandable by web browsers.',
            exp: '4 year',
        },
        {
            title: 'CSS',
            desc: 'CSS (Cascading Style Sheets) is a stylesheet language used in web development to control the presentation and layout of HTML (Hypertext Markup Language) documents. CSS enables web developers to define how the elements and content within a web page should appear on the screen or in print. It separates the structure (defined by HTML) from the visual styling, making it easier to manage and maintain the design of a website.',
            exp: '4 year',
        },
        {
            title: 'JavaScript',
            desc: 'JavaScript is a versatile and widely used programming language primarily used for creating interactive and dynamic functionality in web development. It is often referred to as the "scripting language of the web" because it allows developers to add behavior to web pages, making them more engaging and responsive. JavaScript is an essential component of modern web development and is supported by all major web browsers.',
            exp: '4 year',
        },
        {
            title: 'ReactJS',
            desc: 'React (often referred to as React.js or ReactJS) is an open-source JavaScript library for building user interfaces (UIs) for web applications. Developed and maintained by Facebook and a community of individual developers, React is widely used for creating dynamic, interactive, and reusable UI components. It was first released in 2013 and has since gained popularity for its efficiency and flexibility in front-end web development.',
            exp: '1 year',
        },
        {
            title: 'NextJS',
            desc: 'Next.js is an open-source JavaScript framework that is built on top of React.js. It is designed to simplify and accelerate the development of modern web applications, particularly for server-rendered React applications. Next.js provides a set of features and conventions for building robust, high-performance web applications with ease.',
            exp: '1 year',
        },
        {
            title: 'NodeJS',
            desc: 'Node.js is an open-source, server-side JavaScript runtime environment that allows developers to run JavaScript on the server. It was created by Ryan Dahl in 2009 and has since gained widespread adoption and popularity in web development. Node.js is known for its non-blocking, event-driven architecture, which makes it well-suited for building scalable and high-performance network applications.',
            exp: '2 year',
        },
        {
            title: 'ExpressJS',
            desc: 'Express.js, often simply referred to as Express, is a minimal and flexible web application framework for Node.js. It provides a robust set of features and tools for building web and mobile applications, APIs (Application Programming Interfaces), and server-side applications in JavaScript. Express is widely used in the Node.js ecosystem because it simplifies the development of web applications by offering a structured and organized way to handle HTTP requests and manage routes.',
            exp: '2 year',
        },
        {
            title: 'MongoDB',
            desc: 'MongoDB is a popular open-source, NoSQL database management system designed for scalability, flexibility, and ease of development. It falls into the category of document-oriented databases, which means it stores data in a format similar to JSON documents. MongoDB is known for its ability to handle large volumes of unstructured or semi-structured data and is widely used for a variety of applications, including web and mobile app development, content management systems, and analytics.',
            exp: '2 year',
        },
        {
            title: 'Tailwind',
            desc: 'Tailwind CSS is a popular, utility-first CSS framework that simplifies and streamlines the process of designing and styling web applications. It is designed to help developers create responsive and customizable user interfaces rapidly. Tailwind CSS provides a set of pre-built utility classes that can be applied directly to HTML elements, allowing for a more efficient and consistent way to style web components.',
            exp: '1 year',
        }

    ]






  return (
    <BaseLayout>
    <>

        
        <div className='mx-12 md:mx-12 lg:mx-44 my-24 h-screen'>
        <SkilllComponent skills = {skills} />
        </div>
    </>
    </BaseLayout>
  )
}

export default Skill