title = [`Lorem ipsum dolor sit amet,`,
    `consectetur adipisicing elit,`,
    `sed do eiusmod tempor incididunt`,
    `ut labore et dolore magna aliqua.`,
    `Ut enim ad minim veniam,`,
    `quis nostrud exercitation ullamco`];

/* 
Kazdy z ponizszych tekstow moze, a nawet powinien byc inny,
skopiowane jest wylacznie dla przykladu.
Ogolne zalozenie jest takie, ze skrypt generuje tyle 
zielonych zaokraglonych ramek, ile jest elementow 
w title powyzej. Dla kazdej ramki umieszcza tytul,
obrazek i tekst z ponizszego txt wedlug indeksow.
*/

text = [`
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit, 
    sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    `
    Est accusantium harum At vero debitis aut reiciendis maiores ut 
    atque repudiandae sed pariatur internos quo pariatur praesentium 
    et eligendi inventore. Vel labore sint ut impedit iusto ea sint 
    earum quo voluptatem maxime qui ratione sint ut internos ipsum 
    in porro voluptas. Et alias beatae est ducimus sapiente ut quis 
    aliquid ut quam commodi nam voluptatem nemo. `,
    `
    Qui blanditiis illo et dolorem inventore vel laborum modi hic 
    quae voluptatibus. At repellendus omnis et nostrum voluptatum 
    sit voluptates dolores non dolor saepe et facere velit quo ullam 
    Quis. Qui beatae perspiciatis id doloribus accusantium qui dolores 
    sunt nam dolorem eligendi 33 animi libero qui officia sapiente quo 
    cupiditate impedit. Aut esse aperiam eum voluptatem quasi in cumque 
    voluptas non impedit explicabo non facilis nesciunt eos natus 
    cupiditate et culpa nostrum. `,
    `
    Et libero minima id tenetur placeat sed nesciunt explicabo sed 
    voluptatem aperiam aut distinctio omnis sit illum maxime id sapiente 
    quia? Eos voluptas praesentium id enim natus aut facere harum sit 
    Quis ipsa eos nulla reiciendis?`,
    `
    Eos ratione accusantium est aliquid quam ut quaerat assumenda 
    sed nobis quia. Et tempore alias hic culpa fuga rem quidem magni 
    At dolores architecto eos voluptas recusandae eos sint nemo! 
    Hic eveniet laudantium est odit autem est eius excepturi ut 
    inventore pariatur est fuga tenetur et harum quia et inventore 
    doloremque.`,
    `     
    Non rerum sunt rem rerum sequi qui nihil reprehenderit et libero 
    reiciendis est eius iste eum dolor quod. Ut modi quae hic accusantium 
    omnis qui vitae commodi sit porro omnis ex provident molestiae et 
    natus totam?
    In numquam doloribus ut necessitatibus distinctio ut atque sint eos 
    quia recusandae qui sunt molestias eos voluptatem omnis. Est cumque 
    impedit vel Quis doloremque id aspernatur corporis eum voluptates illo?`
]

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

function textBox(i,div2){
    let div3 = document.createElement('div');
    div3.classList.add('col-sm-8');
    div2.appendChild(div3);
    let header = document.createElement('h2');
    header.classList.add('divTitle');
    header.setAttribute('id', 'section_' + String(i) + '_title');
    div3.appendChild(header);
    let br = document.createElement('br');
    div3.appendChild(br);
    let div4 = document.createElement('div');
    div4.setAttribute('id', 'section_' + String(i) + '_content');
    div3.appendChild(div4);
    let br2 = document.createElement('br');
    div3.appendChild(br2)
}

function imgBox(i,div2){
    let div2_2 = document.createElement('div');
        div2_2.classList.add('col-sm-4');
        let br3 = document.createElement('br');
        div2_2.appendChild(br3);
        let a = document.createElement('a');
        a.setAttribute('href', 'res\\'+String(i)+'.png')
        a.setAttribute('target', '_blank')
        let img = document.createElement('img');
        img.setAttribute('src', 'res\\'+String(i)+'.png')
        img.classList.add('w-100','shadow-1-strong','mb-4','img');
        img.setAttribute('alt', 'W1VC');
        a.appendChild(img);
        div2_2.appendChild(a);
        div2.appendChild(div2_2);
}

function loadSections() {
    for (let i = 0; i < title.length; i++) {
        let div = document.createElement('div');
        div.classList.add('frame','content');
        div.setAttribute('id', 'section_' + String(i))
        let div2 = document.createElement('div');
        div2.classList.add('row');
        div.appendChild(div2);
        if (i % 2 == 0){
            textBox(i,div2);
            imgBox(i,div2);
        }
        else {
            imgBox(i,div2);
            textBox(i,div2);
        }
        document.body.appendChild(div);
        let br4 = document.createElement('br');
        document.body.appendChild(br4);
        document.getElementById('section_' + String(i) + '_title').innerHTML = title[i];
        document.getElementById('section_' + String(i) + '_content').innerHTML = text[i];    
    }
    document.getElementById("backToTopButton").innerHTML = `To top`;    
}