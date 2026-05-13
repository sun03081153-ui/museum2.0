.knowledge{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.knowledge img{
    width: 10rem;
    rotate: -4deg;
}

.knowledge .container{
    position: relative;
    width: 50%;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    background: var(--light_yellow);
    padding: 2rem 2rem;
    line-height: 1.6;

    clip-path: polygon(
        4% 0%,   12% 2%,  25% 0%,   40% 3%,  60% 0%,  78% 4%,  92% 0%,
        100% 12%, 
        97% 28%, 100% 45%, 96% 62%, 100% 78%,
        94% 100%, 80% 96%, 65% 100%, 48% 97%, 30% 100%, 18% 96%, 6% 100%,
        0% 85%, 3% 70%, 0% 55%, 4% 35%, 0% 18%
    );
}

.knowledge .container .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.adopt{
    background-color: var(--light_yellow);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 70px;
}

.container{
    width: 70%;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
}

.carousel {
    width: 70%;
    aspect-ratio: 4/3;
    background: #FAFAFA;
    position: relative;
}

.carousel-cell {
    margin-right: 1.5rem;
    counter-increment: gallery-cell;
    opacity: 0.9;
}

.carousel-cell img{
    width: 500px;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 0.5rem; 
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.12) ;
    -webkit-box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.12) ;
    -moz-box-shadow: 1px 1px 2px 2px rgba(71, 46, 8, 0.12) ;
    transform: scale(0.95);
    opacity: 0.7;
    transition: 0.8s;
    position: relative;
}

.carousel-cell img.is-selected {
    transform: scale(1.1);
    border-radius: 0.5rem; 
    opacity: 1;
}

.flickity-page-dots{
    top: 90%;
}

.flickity-page-dots li.dot{
    background-color: white;
}

.flickity-button.flickity-prev-next-button{
    box-shadow: none;
    background-color: transparent;
    width: 2.25rem;
    height: 2.25rem;
    z-index: 222;
    color:white;
}

.flickity-button.flickity-prev-next-button:hover{
    background-color: transparent;
    color:var(--yellow);
}

.modal {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    padding: 2rem;
    width: 50%;
    /* max-width: 600px; */
    max-height: 80%;
    border-radius: 10px;
    animation: fadeIn .2s;
    overflow-y: scroll;
    scrollbar-color: gray transparent;
    scrollbar-width: thin;
}

#modalBody {
    white-space: pre-line;
}
#modalTitle {
    margin-bottom: 1rem;
    padding: none;
}
#modalDate {
    margin: 1rem auto;
    padding: none;
}
.close-btn {
    float: right;
    font-size: 1.6rem;
    cursor: pointer;
    z-index: 1001;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@media(max-width: 1024px){ 
    .shelter_info .info{
        display: flex;
        flex-direction: column;
        gap:5rem;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 768px) {
    .knowledge img{
        display: none;
    }
    .knowledge .container{
        width: 70%;
    }

    .container{
        width: 100%;
    }
    .carousel {
        width: 100%;
        aspect-ratio: unset; 
    }

    .carousel-cell img {
        width: 100%;                    
        aspect-ratio: 4 / 3;      
        transform: scale(1);        
        opacity: 1;                 
        border-radius: 0.5rem;
    }

    .carousel-cell {
        margin-right: 1rem;
    }

    .flickity-page-dots{
        top: 80%;
    }
}

.vaccine {
    padding: 2rem 70px;
}

.links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color:white;
}

.vac-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    width: 150px;
    height: 180px;
    margin: 60px 22px;
    padding:0;
    text-align: center;
    border-radius: 30px;
    /* border: #FEF5E3 5px solid; */
    background-color: rgba(241, 176, 43, 0.7);
    text-decoration: none;;
    color: white;
    line-height: 1;
    /* box-shadow: 0 8px 20px rgba(0,0,0,0.2); */
}

.vac-link:visited {
    text-decoration: none;
}
.vac-link:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.link-text {
    margin-top: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
}
.nav-icon {
    margin: 0;
    padding: 0;
    transform: scale(0.6);
}

.main-banner{
    width: 100vw;
    height: 150vh;
    background-image: radial-gradient(circle at center, #18191d00, #000000dc),url("./src/info.jpg");
    background-position: 50% 35%;
    background-size: cover;
    position: relative;
}

.main-banner h1{
    margin-top: 150px;
    font-size: 6.25rem;
    font-weight: 500;
    color: white;
    letter-spacing: 0.5rem;
}

.main-banner h2{
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    letter-spacing: 0.5rem;
}

.main-banner p{
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    letter-spacing: 0.5rem;
    text-align: center;
}

.main-title {
    font-size: 256px;
    font-weight: 500;
    color: white;
}

.description {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 0;
}
.goback-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 3rem;
        margin: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: var(--color1);
}
.wave-main {
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 120px;
}

.start-main {
    text-decoration: none;
    padding: 0.8rem 2rem;
    font-size: var(--fs-h3);
    color: white;
    background: none;
    border: none;
    cursor: default;
    box-shadow: none;
    display: inline-block;          
    width: auto;
    margin: 50px auto;
}

.start-main:hover {
    color: white;
    background: none;
    border: none;
    cursor: default;
    box-shadow: none;
}

.start-main::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
}

.start-main:hover::after {
    width: 100%;
}

