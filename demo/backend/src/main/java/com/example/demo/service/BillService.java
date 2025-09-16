package com.example.demo.service;

import com.example.demo.model.Bill;
import com.example.demo.repository.BillRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService {
    private final BillRepository repo;

    public BillService(BillRepository repo) {
        this.repo = repo;
    }

    public List<Bill> getAllBills() {
        return repo.findAll();
    }

    public Bill saveBill(Bill bill) {
        return repo.save(bill);
    }
}
