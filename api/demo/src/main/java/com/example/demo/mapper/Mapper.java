package com.example.demo.mapper;

import com.example.demo.dto.ProdutoDTO;
import com.example.demo.entities.Produto;

public class Mapper {

    public static ProdutoDTO toProdutoDTO(Produto produto) {
        ProdutoDTO dto = new ProdutoDTO();
        dto.setId(produto.getId());
        dto.setNome(produto.getNome());
        dto.setResponsavel(produto.getResponsavel());
        dto.setDataCriacao(produto.getDataCriacao());
        dto.setDataModificacao(produto.getDataModificacao());
        dto.setCategoria(produto.getCategoria());
        return dto;
    }

    public static Produto toProduto(ProdutoDTO dto) {
        Produto produto = new Produto();
        produto.setId(dto.getId());
        produto.setNome(dto.getNome());
        produto.setResponsavel(dto.getResponsavel());
        produto.setCategoria(dto.getCategoria());
        return produto;
    }
}