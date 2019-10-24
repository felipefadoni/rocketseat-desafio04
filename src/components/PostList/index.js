import React, { Component } from 'react';

import Post from '../Post';

import './styles.css';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 3,
        author: {
          name: "Felipe Fadoni",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwRoFwvVDUm-bl9HPaGeROYD-DxPzEgEra8l3UkTEmAmydvUZs"
        },
        date: "06 Jun 2019",
        content: "Fala galera, aqui está funcionando tudo normalmente no ReactJS, bora CODA!!!!",
        comments: [
          {
            id: 3,
            author: {
              name: "Clara Lisboa",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeNsRdNWOqlsvqI4Nf2WsDwqbGqMIufqeMTHxVoFwqVU7XlPDE"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeNsRdNWOqlsvqI4Nf2WsDwqbGqMIufqeMTHxVoFwqVU7XlPDE"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-1/p100x100/72789057_10214187034220353_2174940931541696512_n.jpg?_nc_cat=104&_nc_oc=AQlYqEZABwfFOynSWDbeh67D44KiL739nR2WNTn37i0Wi20XmLYhjb35Ej19Td7yQ_U&_nc_ht=scontent.fsjk2-1.fna&oh=199b30f0668c41a21468c0aae1caa9b0&oe=5E20DF02"
        },
        date: "05 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeNsRdNWOqlsvqI4Nf2WsDwqbGqMIufqeMTHxVoFwqVU7XlPDE"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Gabriel Lisboa",
          avatar: "http://amigosdoweizmann.org.br/stage/wp-content/uploads/2017/05/Bolsista-GabrielLisboa.jpg"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 3,
            author: {
              name: "Clara Lisboa",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeNsRdNWOqlsvqI4Nf2WsDwqbGqMIufqeMTHxVoFwqVU7XlPDE"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeNsRdNWOqlsvqI4Nf2WsDwqbGqMIufqeMTHxVoFwqVU7XlPDE"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <div className="container">
        {
          this.state.posts.map(post => <Post key={post.id} data={post} />)
        }
      </div>
    );
  }
}

export default PostList;