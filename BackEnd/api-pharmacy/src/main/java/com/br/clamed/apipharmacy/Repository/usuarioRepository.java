package com.br.clamed.apipharmacy.Repository;

import com.br.clamed.apipharmacy.Entity.usuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface usuarioRepository extends JpaRepository<usuarioEntity,Long> {

   usuarioEntity findByEmailAndSenha(String email, String senha);

   Boolean existsByEmail(String email);

}
