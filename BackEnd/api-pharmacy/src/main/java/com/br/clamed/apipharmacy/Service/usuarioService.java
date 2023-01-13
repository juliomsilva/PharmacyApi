package com.br.clamed.apipharmacy.Service;

import com.br.clamed.apipharmacy.Dto.Error;
import com.br.clamed.apipharmacy.Dto.usuarioOutput;
import com.br.clamed.apipharmacy.Entity.usuarioEntity;
import com.br.clamed.apipharmacy.Repository.usuarioRepository;
import jakarta.validation.Valid;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class usuarioService {

    @Autowired
    private usuarioRepository usuarioRepository;

    public usuarioEntity buscarPorEmailESenhaRepo(String email, String senha){

       return usuarioRepository.findByEmailAndSenha(email,senha);


    }
    public ResponseEntity<?> cadastrarUsuario(@Valid @RequestBody usuarioEntity usuario) {
        usuarioOutput usuarioOutput = new usuarioOutput();
        if (validarUsuario(usuario)) {
            if (usuarioRepository.existsByEmail(usuario.getEmail())) {
                return new ResponseEntity<>(new Error(Response.SC_CONFLICT, "Erro!", HttpStatus.BAD_REQUEST, "Este e-mail já possui cadastro em nosso sistema!"), HttpStatus.CONFLICT);
            } else {
                usuarioOutput.setDados(usuario);
                usuarioRepository.save(usuario);
                return new ResponseEntity<>(new usuarioOutput(Response.SC_CREATED, "Novo usuario criado!", usuarioOutput.getDados()), HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>(new Error(Response.SC_BAD_REQUEST,"Erro!", HttpStatus.BAD_REQUEST,"Falta preencher usuário ou senha"),HttpStatus.BAD_REQUEST);
    }
    public Boolean validarUsuario(@RequestBody usuarioEntity usuario){
        if(usuario.getEmail() == null || usuario.getSenha() == null)  {
            return false;
        }else if(usuario.getEmail() == "" || usuario.getSenha() == "") {
            return false;
        }else {
            return true;
        }
    }
    @GetMapping("/login")
    public ResponseEntity buscarPorEmailEsenha(@RequestParam("email") String email, @RequestParam("senha") String senha){
        usuarioEntity usuarioEntity = buscarPorEmailESenhaRepo(email,senha);
        usuarioOutput usuarioOutput = new usuarioOutput();
        usuarioOutput.setDados(usuarioEntity);

        if(usuarioOutput.getDados() == null){
            return new ResponseEntity<>(new Error(Response.SC_NOT_FOUND,"Erro!",HttpStatus.NOT_FOUND,"Usuário ou senha inválidos!"),HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(new usuarioOutput(Response.SC_OK,"Dado encontrado!",usuarioOutput.getDados()),HttpStatus.OK);
        }


    }
}
