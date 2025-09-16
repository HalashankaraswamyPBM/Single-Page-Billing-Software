package com.example.demo.controller;

import com.example.demo.model.Bill;
import com.example.demo.service.BillService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bills")
@CrossOrigin(origins = "*")
public class BillController {
    private final BillService service;

    public BillController(BillService service) {
        this.service = service;
    }

    @GetMapping
    public List<Bill> getBills() {
        return service.getAllBills();
    }

    @PostMapping
    public Bill createBill(@RequestBody Bill bill) {
        return service.saveBill(bill);
    }
}
