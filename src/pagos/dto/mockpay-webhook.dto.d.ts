export declare enum MockPayPaymentStatus {
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED"
}
export declare class MockPayWebhookDto {
    transactionId: string;
    reference: string;
    amount: number;
    status: MockPayPaymentStatus;
    paymentDate?: string;
}
//# sourceMappingURL=mockpay-webhook.dto.d.ts.map