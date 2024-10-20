import { UIButton } from "../uikit/ui-button";
import { UIModal } from "../uikit/ui-modal";

export function GameOverModal() {
  return (
    <UIModal
      width="md"
      isOpen={winnerSymbol}
      onClose={() => {
        console.log("close");
      }}
    >
      <UIModal.HEADER>Игра завершена!</UIModal.HEADER>
      <UIModal.BODY>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">Хитрый лис</span>
        </div>
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
