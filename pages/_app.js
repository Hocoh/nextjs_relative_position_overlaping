import App, { Container } from 'next/app'
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Layout from '../components/Layout'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    console.log("pageProps: ", pageProps)
    return ( 
      <React.Fragment>
        <Layout>
          <TransitionGroup>
            <CSSTransition
              key={this.props.router.route}
              classNames='fade'
              timeout={1500} 
            >
              <Component {...pageProps} />
            </CSSTransition>
          </TransitionGroup>
        </Layout>
        <style jsx global>{`
          *{
            margin:0; 
            padding:0;            
          } 

          body{
            overflow-x: hidden;
            
          }
          /*
          .fade-appear{
             opacity: 0;
            transform: translate(150px, 0);
            position:relative;
            z-index:1;
            width:90vw;
            height:100%;
            transition: all 1.5s;
          }

          .fade-appear-active{
             opacity: 0;
            transform: translate(150px, 0);
            position:relative;
            z-index:1;
            width:90vw;
            height:100%;
            transition: all 1.5s;
          }

          .fade-appear-done{
             opacity: 0;
            transform: translate(150px, 0);
            position:relative;
            z-index:1;
            width:90vw;
            height:100%;
            transition: all 1.5s;
          }
          */
          .fade-enter {
            opacity: 0;
            transform: translate(150px, 0);
            position:relative;
            z-index:1;
            width:90vw;
            height:100%;
            transition: all 1.5s;
          }

          .fade-enter-active {
            opacity: 1;
            transform: translate(0,0);
            transition: all 1.5s; 
            position:relative; 
            z-index:1;
            width:90vw;
            height:100%;
          }
          
          .fade-enter-done {
            opacity: 1;
            transform: translate(0,0);
            transition: all 1.5s; 
            position:relative; 
            z-index:2;
            width:90vw;
            height:100%;
          }

           .fade-exit {
            opacity: 0;
            transform: translate(150px,50px);
            transition: all 1.5s;
            position:relative; 
            z-index:2;
            width:90vw;
            height:100%;
          }

          .fade-exit-active {
            opacity: 0;
            transform: translate(150px,50px);
            transition: all 1.5s;
            position:relative; 
            z-index:2;
            width:90vw;
            height:100%;
          }

           .fade-exit-done {
            opacity: 0; 
            transition: all 1.5s;
            position:relative; 
            z-index:2;
            width:90vw;
            height:100%;
          }
        `}</style>
      </React.Fragment>
    )
  }
}
