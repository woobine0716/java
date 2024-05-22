package day05;

import java.util.Scanner;

public class Review {
    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        System.out.println("몸무게를 입력하세요.");
//        System.out.println("키를 입력하세요.m 단위로 입력");
//        int kg = sc.nextInt();
//        double m = sc.nextDouble();
//        double bmi = kg / (m * m);
//        System.out.println(bmi);
//        if (bmi => 30) {
//            System.out.println("비만입니다.");
//        }
//        else if (bmi >= 30 && bmi) {}
        Scanner sc = new Scanner(System.in);
        System.out.println("1.아메리카노 - 4000원 2. 카페라떼-4500원 3. 카푸치노-5000원:");
        int coffeNumber = sc.nextInt();
        System.out.println("수량 입력");
        int amountNumber = sc.nextInt();
        System.out.println("멤머십 입니까?(1번:예 2번: 아니오)");
        int membership = sc.nextInt();
        boolean isMember = membership == 1;

        int coffePrice = 0;
        switch (coffeNumber) {
            case 1:
                coffePrice = 4000;
                break;
                case 2:
                    coffePrice = 4500;
                    break;
                    case 3:
                        coffePrice = 5000;
                        break;
            default:
                break;

        }
        double totalPrice = coffePrice * amountNumber * (isMember ? 0.9 : 1);
        System.out.println("총 금액:" + totalPrice);
    }
}
