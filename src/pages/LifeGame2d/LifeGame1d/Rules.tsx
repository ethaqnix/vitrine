import React from "react";
import { ILifeGame1dRule } from "./defaultRules";
import Rule from "./Rule";

interface OwnProps {
  rules: ILifeGame1dRule[];
  onRulesChange(newRules: any): void;
}

interface OwnState {}

type Props = OwnProps;

class Rules extends React.Component<Props, OwnState> {
  onRulesChange = (idx: number, value: boolean) => {
    this.props.onRulesChange(
      this.props.rules.map((rule, i) =>
        idx === i
          ? {
              pattern: rule.pattern,
              result: value,
            }
          : rule
      )
    );
  };

  render() {
    return (
      <div>
        {this.props.rules.map((rule, i) => (
          <Rule
            key={`rule_${i}`}
            rule={rule.pattern}
            result={rule.result}
            onResultChange={(result) => this.onRulesChange(i, result)}
          />
        ))}
      </div>
    );
  }
}

export default Rules;
