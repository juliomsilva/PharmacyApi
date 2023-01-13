package com.br.clamed.apipharmacy.Repository;

import com.br.clamed.apipharmacy.Entity.medicamentoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface medicamentoRepository extends JpaRepository<medicamentoEntity,Long> {
}
