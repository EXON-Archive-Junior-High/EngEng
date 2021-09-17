import fs from 'fs'

fs.writeFileSync('./data.txt', `
If any problems                  , let me know.
어떤 문제가 발생하면, 저에게 알려주세요.
Something unexpected                   in class.
예기치 못한 일이 수업 중에 일어났다.
This medicine                   no danger to patients. 
이 약은 환자들에게 어떠한 위험도 제기하지 않는다. 
They                   for the group photo.
그들은 단체 사진을 찍으려고 포즈를 취했다.
There is a                   between him and his brother. 
그와 형 사이에 갈등이 있다.
She often comes into                   with her husband. 
그녀와 그녀의 남편과 자주 충돌을 일으킨다.
The                   size pizza is $5.
1인용 피자는 5달러입니다.
                  are affected by their community.
개인은 자신이 속한 지역 사회의 영향을 받는다.
                  hurts families’ minds and bodies.
가난 때문에 가족의 마음과 몸이 상처를 입는다.
The dog got through a                   in the fence.
그 개는 울타리에 난 구멍을 통과했다.
There’s a big                   between the rich and poor. 
빈부의 격차가 크다.
The TV producer has lots of                  .
그 TV 프로듀서는 영향력이 크다.
The art of Paul Cézanne                   Picasso a lot.
폴 세잔의 회화가 피카소에게 커다란 영향을 끼쳤다.
Bullying is a                   problem in schools. 
괴롭힘은 학교에서 중요한 문제이다.
Weather                   made us come down the mountain early.
날씨 상황 때문에 우리는 산에서 빨리 내려왔다.
Their                   changed a lot after he lost his job.
그들의 형편은 그가 실직한 후에 많이 변했다.
Mary really                   the award.
메리는 정말로 그 상을 받을 자격이 있다.
Aesop wrote many                   stories.
이솝은 여러 교훈적인 이야기를 썼다.
`.replace(/\                 /gi, ' ______'))
