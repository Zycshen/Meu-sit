const produtos = [
        { id: 1, nome: "Produto 1", preco: 50, img: "https://via.placeholder.com/150" },
            { id: 2, nome: "Produto 2", preco: 75, img: "https://via.placeholder.com/150" },
                { id: 3, nome: "Produto 3", preco: 100, img: "https://via.placeholder.com/150" }
                ];

                let carrinho = [];

                function mostrarProdutos() {
                    let container = document.getElementById("produtos");
                        produtos.forEach(produto => {
                                let div = document.createElement("div");
                                        div.classList.add("produto");
                                                div.innerHTML = `
                                            <img src="${produto.img}" alt="${produto.nome}">
                                                    <h2>${produto.nome}</h2>
                                                    <p>R$ ${produto.preco}</p>
                                                             <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
                                                                                                        `;
                                                                                                                container.appendChild(div);
                                                                                                                    });
                                                                                                                    }

                                                                                                                    function adicionarAoCarrinho(id) {
                                                                                                                        let produto = produtos.find(p => p.id === id);
                                                                                                                            carrinho.push(produto);
                                                                                                                                document.getElementById("contador").innerText = carrinho.length;
                                                                                                                                }

                                                                                                                                function verCarrinho() {
                                                                                                                                    alert(`Você tem ${carrinho.length} itens no carrinho.`);
                                                                                                                                    }

                                                                                                                                    mostrarProdutos();

]