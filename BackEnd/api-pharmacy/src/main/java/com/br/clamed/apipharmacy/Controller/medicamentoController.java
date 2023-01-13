package com.br.clamed.apipharmacy.Controller;
import com.br.clamed.apipharmacy.Entity.medicamentoEntity;
import com.br.clamed.apipharmacy.Service.medicamentoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000 ")
@RequestMapping("/medicamentos")
public class medicamentoController {


    private final medicamentoService medicamentoService;

    public medicamentoController(com.br.clamed.apipharmacy.Service.medicamentoService medicamentoService) {
        this.medicamentoService = medicamentoService;
    }

    @PostMapping
    public ResponseEntity<?> cadastrarMedicamento(@Valid @RequestBody medicamentoEntity medicamento) {
       return medicamentoService.cadastrarMedicamento(medicamento);
    }

    @GetMapping
    public ResponseEntity<?> listarMedicamentos() {
        return medicamentoService.listarMedicamentos();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizarMedicamento(@PathVariable Long id, @RequestBody medicamentoEntity medicamento) {
        return medicamentoService.atualizarMedicamento(id,medicamento);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarMedicamentoporID(@PathVariable Long id) {
        return medicamentoService.buscarMedicamentoporID(id);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarPorID(@PathVariable Long id) {

        return medicamentoService.deletarPorID(id);
    }
}