package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ProdutoDTO;
import com.example.demo.entities.Produto;
import com.example.demo.mapper.Mapper;
import com.example.demo.repository.ProdutoRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<ProdutoDTO> findAll() {
        return produtoRepository.findByAtivoTrue().stream()
                .map(Mapper::toProdutoDTO)
                .collect(Collectors.toList());
    }

    public Optional<ProdutoDTO> findById(Long id) {
        return produtoRepository.findById(id)
                .map(Mapper::toProdutoDTO);
    }

    public ProdutoDTO save(ProdutoDTO produtoDTO) {
        Produto produto = Mapper.toProduto(produtoDTO);
        produto = produtoRepository.save(produto);
        return Mapper.toProdutoDTO(produto);
    }

    public void delete(Long id) {
        produtoRepository.findById(id).ifPresent(produto -> {
            produto.setAtivo(false);
            produtoRepository.save(produto);
        });
    }
}