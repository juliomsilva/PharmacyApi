package com.br.clamed.apipharmacy.Repository;

import com.br.clamed.apipharmacy.Entity.enderecoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface enderecoRepository extends JpaRepository<enderecoEntity,Long> {
}
