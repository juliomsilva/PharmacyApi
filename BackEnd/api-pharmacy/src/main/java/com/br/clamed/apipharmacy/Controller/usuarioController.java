package com.br.clamed.apipharmacy.Controller;

import com.br.clamed.apipharmacy.Entity.usuarioEntity;

import com.br.clamed.apipharmacy.Service.usuarioService;
import jakarta.validation.Valid;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000 ")
@RequestMapping("/usuario")
public class usuarioController {


    private final usuarioService usuarioService;

    public usuarioController(com.br.clamed.apipharmacy.Service.usuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrarUsuario(@Valid @RequestBody usuarioEntity usuario){
     return usuarioService.cadastrarUsuario(usuario);
    }

    @GetMapping("/login")
    public ResponseEntity<?> buscarPorEmailEsenha(@RequestParam ("email") String email, @RequestParam("senha") String senha){
        return usuarioService.buscarPorEmailEsenha(email,senha);
    }
}
