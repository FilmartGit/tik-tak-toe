import { UIButton } from "../../uikit/ui-button";
import { UIModal } from "../../uikit/ui-modal";

export function GameOverModal({ winnerName, players }) {
  return (
    <UIModal
      width="md"
      isOpen={winnerName}
      onClose={() => {
        console.log("close");
      }}
    >
      <UIModal.HEADER>Игра завершена!</UIModal.HEADER>
      <UIModal.BODY>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="justify-between grid grid-cols-2 gap-3 mt-2">{players}</div>
      </UIModal.BODY>
      <UIModal.FOOTER>
        <UIButton size="md" variant="outline">
          Вернуться
        </UIButton>
        <UIButton size="md" variant="primary">
          Играть снова
        </UIButton>
      </UIModal.FOOTER>
    </UIModal>
  );
}
