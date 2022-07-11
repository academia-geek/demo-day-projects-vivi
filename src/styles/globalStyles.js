import styled from "styled-components";

export const SectionHero = styled.section`
    margin: 2rem;
    h1{
        font-size: 60px;
    }
    h3{
        font-size: 20px;
        margin-bottom: 1rem
    }
    img{
        border-radius: 2rem;
    }
`
export const FOOTER = styled.footer`
    text-align: center;
    width: 100%;
    margin: 60px 0 0;
    padding: 20px 0;
    font-size: 14px;
    color: #aaa;
    background-color: #343434;
    font-weight: 300;
    flex-shrink: 0;
    bottom: 0;
`
export const CONTAINER = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 900px;
    margin: 0 auto;
    align-items: center;
`
export const SECTION1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 60px;
    text-align: left;
    border-right: 1px solid #4a4a4a;
    padding: 10px 15% 10px 0;
    img{
        width: 9rem;
        border-radius: 12px;
    };
    p{
        display: flex;
        align-items: center;
        font-size: 36px;
        color: #fff;
        position: relative;
        margin-bottom: 10px;
    }
`