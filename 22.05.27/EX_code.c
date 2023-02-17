#include<iostream>
#include<time.h>
#include<Windows.h>
using namespace std;

int main()
{
   srand(time(NULL));
   int card[52];      //카드52장
   int shape[3];      //문양 3개
   int number[3];      //숫자3개
   int dest, sour, temp;   //셔플
   int betting;      //배팅용
   int money = 10000;   //도박을 위한 초기자금
   int useCard = 0;   //사용한 카드 버리기 위한 변수


   
   for (int i = 0; i < 52; i++)
   {
      card[i] = i;
   }
   //셔플
   for (int i = 0; i < 500; i++)
   {
      dest = rand() % 52;
      sour = rand() % 52;

      temp = card[dest];
      card[dest] = card[sour];
      card[sour] = temp;
   }
   while (true)
   {
      //보여줄 카드 2장, 내가 배팅할 1장 총 3장
      for (int i = 0; i < 3; i++)
      {
         shape[i] = card[i + useCard] / 13;//문양
         number[i] = card[i + useCard] % 13;//숫자
         
         //모양셋팅
         //♠◆♥♣
         switch (shape[i])
         {
            case 0:
               cout << "♠";
               break;
            case 1:
               cout << "♣";
               break;
            case 2:
               cout << "◆";
               break;
            case 3:
               cout << "♥";
               break;
         }//end of switch(shape)
         switch (number[i])
         {
            case 0:
               cout << "A \t";
               break;
            case 10 : 
               cout << "J \t";
               break;
            case 11:
               cout << "Q \t";
               break;
            case 12:
               cout << "K \t";
               break;
            default:
               cout << number[i] + 1 << " \t";
               break;
         }
      }//end of switch(number)
      
      cout << "총 금액 : " << money << endl;
      cout << "금액을 배팅하시오!";
      cin >> betting;

      //재산이 1000원 미만이면
      if (money < 1000)
      {
         cout << "파산!!!!!집으로 돌아가라" << endl;
         
         break;
      }
      if (1000 > betting || betting > money)
      {
         Sleep(1000);
         continue;
      }

      //보여지는 카드 2장중에 A<B, A>B
      //A<C<B, A>C>B
      if (number[0]<number[2] && number[2]<number[1] ||
         number[0] > number[2] && number[2] > number[1])
      {
         cout << "카드숫자 : " << number[2] + 1 << endl;
         money += betting;
         cout << betting << "돈을 획득했다" << endl;
         Sleep(1000);
      }
      else
      {
         cout << "카드 숫자 : " << number[2] + 1 << endl;
         money -= betting;
         cout << betting << "돈을 잃었다!!" << endl;
         Sleep(1000);
      }
      useCard += 3;//사용한 카드를 버리자.
      cout << "현재 사용한 카드 수 : " << useCard << endl;
      if (useCard == 51)
      {
         cout << "카드가 없으므로 종료한다." << endl;
         break;

      }

   }//end of while
   system("pause");
   return 0;
}