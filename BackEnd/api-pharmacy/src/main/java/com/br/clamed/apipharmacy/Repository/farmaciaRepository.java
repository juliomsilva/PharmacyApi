package com.br.clamed.apipharmacy.Repository;

import com.br.clamed.apipharmacy.Entity.farmaciaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface farmaciaRepository extends JpaRepository<farmaciaEntity,Long> {
    Boolean existsByCnpj(String cnpj);
}
